# 🛠️ Railway-Ready Flask App: kwartanapod/api/main.py

from flask import Flask, jsonify
import os
import redis
import requests

app = Flask(__name__)

# === ENV VARS ===
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
DEBUG_CHAT_ID = os.getenv("DEBUG_CHAT_ID")
UPSTASH_REDIS_URL = os.getenv("UPSTASH_REDIS_REST_URL")

# === REDIS CONNECT ===
r = redis.from_url(UPSTASH_REDIS_URL)

@app.route("/")
def root():
    return jsonify({"message": "✅ Gospel Swarm Flask on Railway is active."})

@app.route("/ping")
def ping():
    try:
        bots = int(r.get("bots") or 0)
        earnings = float(r.get("earnings") or 0.0)

        msg = f"✅ Swarm Online\nBots: {bots}\nEarnings: ${earnings}"

        telegram_url = (
            f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        )

        payload = {
            "chat_id": DEBUG_CHAT_ID,
            "text": msg
        }

        res = requests.post(telegram_url, json=payload)

        return jsonify({
            "sent": res.status_code == 200,
            "response": res.json()
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

python api/main.py
