#!/bin/bash

# 📱 سكريبت بناء تطبيق أندرويد لـ "اسلام جوبا"
# الاستخدام: ./build-android.sh

set -e

echo "🚀 بدء بناء تطبيق أندرويد..."
echo ""

# الخطوة 1: بناء التطبيق
echo "📦 Step 1: بناء التطبيق..."
bun run build
echo "✅ تم البناء بنجاح!"
echo ""

# الخطوة 2: مزامنة مع Android
echo "🔄 Step 2: مزامنة الملفات مع Android..."
npx cap sync android
echo "✅ تمت المزامنة بنجاح!"
echo ""

# الخطوة 3: فتح Android Studio
echo "📱 Step 3: فتح Android Studio..."
echo "⚠️  سيفتح Android Studio الآن"
echo "💡 الخطوات التالية:"
echo "   1. انتظر تحميل Gradle"
echo "   2. Build → Build Bundle(s) / APK(s) → Build APK(s)"
echo "   3. APK سيكون في: android/app/build/outputs/apk/debug/"
echo ""
npx cap open android
echo ""

echo "✅ تم فتح Android Studio بنجاح!"
echo "🎉 الآن يمكنك بناء APK من داخل Android Studio"
