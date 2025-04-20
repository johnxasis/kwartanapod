from flask import Flask, jsonify
import os
import redis
import requests

app = Flask(__name__)

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
DEBUG_CHAT_ID = os.getenv("DEBUG_CHAT_ID")
UPSTASH_REDIS_URL = os.getenv("UPSTASH_REDIS_REST_URL")
UPSTASH_REDIS_REST_TOKEN = os.getenv("UPSTASH_REDIS_REST_TOKEN")

r = redis.Redis.from_url(f"{UPSTASH_REDIS_URL}?password={UPSTASH_REDIS_REST_TOKEN}")

@app.route("/")
def root():
    return jsonify({ "message": "✅ Vercel Flask handler active." })

@app.route("/debug")
def debug():
    try:
        bots = int(r.get("bots") or 0)
        earnings = float(r.get("earnings") or 0)

        telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        payload = {
            "chat_id": DEBUG_CHAT_ID,
            "text": f"🧠 Debug: {bots} bots, ${earnings} earnings."
        }
        res = requests.post(telegram_url, json=payload)

        return jsonify({
            "telegram_status": res.status_code,
            "telegram_response": res.text,
            "bots": bots,
            "earnings": earnings
        })

    except Exception as e:
        return jsonify({ "error": str(e) }), 500

# Vercel needs this — don't call app.run()
handler = app
