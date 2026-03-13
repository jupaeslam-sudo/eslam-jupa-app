#!/bin/bash

# 🔄 سكريبت تحديث تطبيق "اسلام جوبا"
# الاستخدام: ./update-app.sh "وصف التحديثات"

set -e

# التحقق من وجود وصف للتحديثات
if [ -z "$1" ]; then
    echo "❌ خطأ: يجب توفير وصف للتحديثات"
    echo "   الاستخدام: ./update-app.sh \"وصف التحديثات\""
    echo ""
    echo "   مثال:"
    echo "   ./update-app.sh \"إضافة قصيدة جديدة\""
    echo "   ./update-app.sh \"تحديث التصميم\""
    exit 1
fi

echo "🚀 بدء تحديث تطبيق اسلام جوبا..."
echo ""

# 1. رؤية التغييرات
echo "📊 Step 1: رؤية التغييرات..."
git status
echo ""

# 2. إضافة الملفات المعدلة
echo "📝 Step 2: إضافة الملفات المعدلة..."
git add .
echo "✅ تمت إضافة الملفات!"
echo ""

# 3. Commit التغييرات
echo "💾 Step 3: حفظ التغييرات..."
git commit -m "$1"
echo "✅ تم حفظ التغييرات!"
echo ""

# 4. رفع إلى GitHub
echo "📤 Step 4: رفع التغييرات إلى GitHub..."
git push origin main
echo "✅ تم الرفع بنجاح!"
echo ""

# 5. إعلام المستخدم
echo "🎉 تم تحديث التطبيق بنجاح!"
echo ""
echo "📌 خطوات التحديث على Vercel:"
echo "   1. Vercel سيكتشف التغييرات وينشر تلقائياً"
echo "   2. انتظر 1-2 دقيقة"
echo "   3. التطبيق سيحدث تلقائياً"
echo ""
echo "📱 خطوات التحديث على الهاتف:"
echo "   1. استخدم appcreator24 مرة أخرى"
echo "   2. بناء APK جديد"
echo "   3. تثبيت الجديد على الهاتف"
echo ""
echo "🔗 رابط GitHub:"
echo "   https://github.com/jupaeslam-sudo/eslam-jupa-app"
echo ""
