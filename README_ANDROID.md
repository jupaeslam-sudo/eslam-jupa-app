# 📱 تطبيق "اسلام جوبا" - دليل التحويل إلى Android

## 🎯 ملخص سريع

تم تحويل تطبيق Next.js "اسلام جوبا" بنجاح لتطبيق أندرويد جاهز للبناء باستخدام **Capacitor**.

---

## ✅ ما تم إنجازه:

1. ✅ تثبيت أدوات Capacitor (@capacitor/core, @capacitor/cli, @capacitor/android)
2. ✅ إنشاء ملف تكوين Capacitor (capacitor.config.ts)
3. ✅ تعديل next.config.ts للتصدير الثابت (output: "export")
4. ✅ بناء التطبيق بنجاح (مجلد out)
5. ✅ إضافة منصة Android
6. ✅ مزامنة الملفات
7. ✅ إنشاء ملف manifest.json
8. ✅ إعداد مجلد android للبناء

---

## 🚀 كيفية بناء APK (ملف التثبيت):

### الخطوة 1: افتح Android Studio
```bash
npx cap open android
```

### الخطوة 2: انتظر تحميل Gradle (5-10 دقائق أول مرة)

### الخطوة 3: بناء APK
- **Debug APK**: Build → Build Bundle(s) / APK(s) → Build APK(s)
- **Release APK**: Build → Generate Signed Bundle / APK → APK

### الخطوة 4: استخراج APK من:
- Debug: `android/app/build/outputs/apk/debug/app-debug.apk`
- Release: `android/app/build/outputs/apk/release/app-release.apk`

---

## 📂 هيكل المشروع:

```
my-project/
├── src/app/              # كود Next.js
├── public/               # ملفات ثابتة
│   ├── manifest.json     # إعدادات PWA
│   └── eslam-jupa-profile.png
├── out/                  # ملفات البناء (static export)
├── android/              # مشروع Android (تم إنشاؤه تلقائياً)
├── capacitor.config.ts   # إعدادات Capacitor
├── next.config.ts        # إعدادات Next.js
├── package.json          # التبعيات
└── BUILD_ANDROID_APK.md  # دليل البناء التفصيلي
```

---

## 🔄 تحديث التطبيق بعد التعديلات:

```bash
# 1. تعديل الكود
# 2. بناء التطبيق
bun run build

# 3. مزامنة مع Android
npx cap sync android

# 4. فتح Android Studio
npx cap open android

# 5. بناء APK جديد
```

---

## 🎨 تخصيص التطبيق:

### تغيير الأيقونة:
- استخدم: https://appicon.co/
- أو: `icon-gen -i public/eslam-jupa-profile.png -o android/app/src/main/res/`

### تغيير اسم التطبيق:
- ملف: `android/app/src/main/res/values/strings.xml`
- عدل: `<string name="app_name">اسلام جوبا</string>`

### تغيير الألوان:
- ملف: `android/app/src/main/res/values/colors.xml`

---

## 📱 معلومات التطبيق:

- **اسم التطبيق:** اسلام جوبا
- **Bundle ID:** com.eslamjupa.app
- **الإطار:** Next.js 16 + Capacitor 8
- **الهدف:** Android 8.0+ (API 26+)

---

## 📖 ملفات مهمة:

1. **BUILD_ANDROID_APK.md** - دليل بناء APK خطوة بخطوة
2. **capacitor.config.ts** - إعدادات Capacitor
3. **next.config.ts** - إعدادات Next.js
4. **public/manifest.json** - إعدادات PWA

---

## 🎉 التالي:

الآن يمكنك:
1. فتح Android Studio: `npx cap open android`
2. بناء APK أول لك
3. تثبيته على هاتفك
4. مشاركته مع الآخرين!

---

للمزيد من التفاصيل، اقرأ ملف **BUILD_ANDROID_APK.md** 🚀
