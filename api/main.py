# 🚆 Railway-Ready Flask App: gospel-swarm/main.py
# Fully working on Railway, no serverless crashes

from flask import Flask, jsonify
import os
import redis
import requests

app = Flask(__name__)

# === ENVIRONMENT VARIABLES ===
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
DEBUG_CHAT_ID = os.getenv("DEBUG_CHAT_ID")
UPSTASH_REDIS_URL = os.getenv("UPSTASH_REDIS_REST_URL")
UPSTASH_REDIS_REST_TOKEN = os.getenv("UPSTASH_REDIS_REST_TOKEN")

# === REDIS INIT ===
r = redis.Redis.from_url(f"{UPSTASH_REDIS_URL}?password={UPSTASH_REDIS_REST_TOKEN}")

@app.route("/")
def root():
    return jsonify({"message": "✅ Gospel Swarm Flask on Railway is active."})

@app.route("/ping")
def ping():
    try:
        bots = int(r.get("bots") or 0)
        earnings = float(r.get("earnings") or 0)
        msg = f"✅ Swarm Online\nBots: {bots}\nEarnings: ${earnings}"

        telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        payload = {"chat_id": DEBUG_CHAT_ID, "text": msg}
        response = requests.post(telegram_url, json=payload)

        return jsonify({
            "message": msg,
            "telegram_status": response.status_code,
            "telegram_response": response.text
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/debug")
def debug():
    try:
        output = {
            "TELEGRAM_TOKEN": TELEGRAM_TOKEN,
            "DEBUG_CHAT_ID": DEBUG_CHAT_ID,
            "UPSTASH_REDIS_REST_URL": UPSTASH_REDIS_URL,
            "UPSTASH_REDIS_REST_TOKEN": "[HIDDEN]"
        }
        r.ping()
        output["redis"] = "✅ Connected"

        telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        payload = {"chat_id": DEBUG_CHAT_ID, "text": "🐞 Debug message from Railway"}
        response = requests.post(telegram_url, json=payload)
        output["telegram_status"] = response.status_code
        output["telegram_response"] = response.text
        return jsonify(output)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(debug=True, host="0.0.0.0", port=port)
