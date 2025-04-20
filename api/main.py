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

# === HOME ROUTE ===
@app.route("/")
def root():
    return jsonify({ "message": "🧠 Gospel Swarm Flask Server is Online." })

# === PING ROUTE ===
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
        res = requests.post(telegram_url, json=payload)

        return jsonify({
            "status": "success",
            "telegram_status": res.status_code,
            "telegram_response": res.text,
            "bots": bots,
            "earnings": earnings
        })

    except Exception as e:
        return jsonify({ "status": "error", "message": str(e) }), 500

# === DEBUG ROUTE ===
@app.route("/debug")
def debug():
    try:
        status = {
            "TELEGRAM_TOKEN": TELEGRAM_TOKEN,
            "DEBUG_CHAT_ID": DEBUG_CHAT_ID,
            "UPSTASH_REDIS_REST_URL": UPSTASH_REDIS_URL,
            "UPSTASH_REDIS_REST_TOKEN": "(hidden)"
        }

        # Redis Test
        try:
            bots = int(r.get("bots") or 0)
            earnings = float(r.get("earnings") or 0)
            status["redis_check"] = f"OK - Bots: {bots}, Earnings: {earnings}"
        except Exception as e:
            status["redis_error"] = str(e)

        # Telegram Test
        try:
            telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
            payload = {
                "chat_id": DEBUG_CHAT_ID,
                "text": "🛠️ Debug ping from Flask server"
            }
            response = requests.post(telegram_url, json=payload)
            status["telegram_status"] = response.status_code
            status["telegram_response"] = response.text
        except Exception as e:
            status["telegram_error"] = str(e)

        return jsonify(status)

    except Exception as e:
        return jsonify({ "error": str(e) }), 500

if __name__ == "__main__":
    app.run(debug=True)
