#!/bin/bash

# 🚀 سكريبت نشر تطبيق "اسلام جوبا" على Vercel
# الاستخدام: ./deploy-vercel.sh

set -e

echo "🚀 بدء نشر تطبيق اسلام جوبا على Vercel..."
echo ""

# 1. بناء التطبيق
echo "📦 Step 1: بناء التطبيق..."
bun run build
echo "✅ تم البناء بنجاح!"
echo ""

# 2. نشر على Vercel
echo "🌐 Step 2: نشر على Vercel..."
vercel --prod
echo ""
echo "🎉 تم النشر بنجاح!"
echo ""

# 3. عرض المعلومات
echo "📌 معلومات النشر:"
echo "   Repository: https://github.com/jupaeslam-sudo/eslam-jupa-app"
echo "   تحقق من النشر على: https://vercel.com/dashboard"
echo ""
echo "📱 الخطوات التالية:"
echo "   1. اذهب إلى appcreator24.com"
echo "   2. أنشئ تطبيق جديد"
echo "   3. استخدم رابط Vercel"
echo "   4. بناء APK وتحميله"
echo ""
