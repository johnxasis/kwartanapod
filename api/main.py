import os
import json
import redis
import telegram

def handler(request):
    try:
        TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
        UPSTASH_REDIS_URL = os.getenv("UPSTASH_REDIS_REST_URL")
        UPSTASH_REDIS_TOKEN = os.getenv("UPSTASH_REDIS_REST_TOKEN")
        DEBUG_CHAT_ID = os.getenv("DEBUG_CHAT_ID")

        r = redis.Redis.from_url(f"{UPSTASH_REDIS_URL}?password={UPSTASH_REDIS_TOKEN}")
        bot = telegram.Bot(token=TELEGRAM_TOKEN)

        # Get swarm stats from Redis
        bots = int(r.get("bots") or 0)
        earnings = float(r.get("earnings") or 0)

        # Send update to your Telegram (you can remove this line if unnecessary)
        if DEBUG_CHAT_ID:
            bot.send_message(chat_id=DEBUG_CHAT_ID, text=f"✅ Swarm Active\n🧠 Bots: {bots}\n💸 Earnings: ${earnings}")

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Swarm Ping Successful",
                "bots": bots,
                "earnings": earnings
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({ "error": str(e) })
        }
