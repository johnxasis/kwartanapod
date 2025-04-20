# 📂 FILE: api/main.py (FLASK DEPLOY MODE)
# ✅ No serverless issues, compatible with Vercel, Railway, or Deta

from flask import Flask, jsonify
import os
import redis
import requests

app = Flask(__name__)

# === ENVIRONMENT VARIABLES ===
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
DEBUG_CHAT_ID = os.getenv("DEBUG_CHAT_ID")
UPSTASH_REDIS_URL = os.getenv("UPSTASH_REDIS_REST_URL")
UPSTASH_REDIS_TOKEN = os.getenv("UPSTASH_REDIS_REST_TOKEN")

# === REDIS INIT ===
r = redis.Redis.from_url(f"{UPSTASH_REDIS_URL}?password={UPSTASH_REDIS_TOKEN}")

# === BOT PING ROUTE ===
@app.route("/ping")
def ping():
    try:
        bots = int(r.get("bots") or 0)
        earnings = float(r.get("earnings") or 0)

        msg = f"✅ Gospel Swarm is LIVE!\n🤖 Bots: {bots}\n💸 Earnings: ${earnings}"
        telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        payload = {
            "chat_id": DEBUG_CHAT_ID,
            "text": msg
        }
        requests.post(telegram_url, json=payload)

        return jsonify({
            "status": "success",
            "message": msg,
            "bots": bots,
            "earnings": earnings
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/")
def root():
    return jsonify({"message": "🧠 Gospel Swarm Flask Server is Online."})

if __name__ == "__main__":
    app.run(debug=True)
