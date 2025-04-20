# 📂 FILE: api/main.py
# ✅ Vercel-Compatible Python Serverless Function

import os
import json
import redis
import telegram
from telegram.ext import CommandHandler, Updater

def handler(request):
    try:
        TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
        UPSTASH_REDIS_URL = os.getenv("UPSTASH_REDIS_REST_URL")
        UPSTASH_REDIS_TOKEN = os.getenv("UPSTASH_REDIS_REST_TOKEN")

        r = redis.Redis.from_url(f"{UPSTASH_REDIS_URL}?password={UPSTASH_REDIS_TOKEN}")
        bot = telegram.Bot(token=TELEGRAM_TOKEN)

        # Simulated /status trigger (since webhooks don't fire here)
        chat_id = os.getenv("DEBUG_CHAT_ID") or "123456789"
        bots = r.get("bots") or 0
        earnings = r.get("earnings") or 0
        bot.send_message(chat_id=chat_id, text=f"Swarm Online\nBots: {bots}\nEarnings: ${earnings}")

        return {
            "statusCode": 200,
            "body": json.dumps({"message": "Bot heartbeat sent."})
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
