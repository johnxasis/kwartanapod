# 📂 FILE: api/main.py (DEBUG VERSION)
# ✅ Vercel-Compatible Python Serverless Function w/Crash Logging

import os
import json
import redis
import telegram
import traceback

def handler(request):
    try:
        TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
        UPSTASH_REDIS_URL = os.getenv("UPSTASH_REDIS_REST_URL")
        UPSTASH_REDIS_TOKEN = os.getenv("UPSTASH_REDIS_REST_TOKEN")
        DEBUG_CHAT_ID = os.getenv("DEBUG_CHAT_ID")

        if not TELEGRAM_TOKEN or not UPSTASH_REDIS_URL or not UPSTASH_REDIS_TOKEN or not DEBUG_CHAT_ID:
            raise ValueError("One or more environment variables are missing.")

        r = redis.Redis.from_url(f"{UPSTASH_REDIS_URL}?password={UPSTASH_REDIS_TOKEN}")
        bot = telegram.Bot(token=TELEGRAM_TOKEN)

        bots = int(r.get("bots") or 0)
        earnings = float(r.get("earnings") or 0)

        bot.send_message(chat_id=DEBUG_CHAT_ID, text=f"✅ Swarm Debug Online\nBots: {bots}\nEarnings: ${earnings}")

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "✅ Swarm Ping Successful",
                "bots": bots,
                "earnings": earnings
            })
        }

    except Exception as e:
        error_trace = traceback.format_exc()
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": str(e),
                "trace": error_trace
            })
        }
