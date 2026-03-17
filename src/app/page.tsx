'use client'

import { useState } from 'react'
import { Youtube, Facebook, Instagram, Music, User, Home as HomeIcon, Info, MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  const socialLinks = {
    youtube: 'https://www.youtube.com/@eslamJupa1',
    tiktok: 'https://www.tiktok.com/@eslamjupaofficial',
    instagram: 'https://www.instagram.com/eslamjupaofficial',
    facebook: 'https://www.facebook.com/officialeslamjupa',
    appleMusic: 'https://music.apple.com/eg/artist/إسلام-جوبا/1700690319',
    spotify: 'https://open.spotify.com/intl-ar/artist/2381g6RDNTQWLi2iOlbgkC',
    anghami: 'https://play.anghami.com/artist/2929854',
    deezer: 'https://www.deezer.com/us/artist/86706592',
    audiomack: 'https://audiomack.com/aslam-jwba',
    qobuz: 'https://www.qobuz.com/dk-en/interpreter/-26056560/19269705',
    amazonMusic: 'https://music.amazon.com.mx/artists/B0CD7X1862/إسلام-جوبا',
    boomplay: 'https://www.boomplay.com/artists/13288498',
    whatsapp: 'https://wa.me/201228833773',
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-600/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 flex-shrink-0">
                <img
                  src="/eslam-jupa-profile.png"
                  alt="إسلام جوبا"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-yellow-400">اسلام جوبا</h1>
                <p className="text-xs text-gray-400">Eslam Jupa</p>
              </div>
            </div>
            <nav className="flex gap-2">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setActiveTab('home')}
                className={activeTab === 'home' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'text-yellow-400'}
              >
                <HomeIcon className="w-5 h-5" />
              </Button>
              <Button
                variant={activeTab === 'about' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setActiveTab('about')}
                className={activeTab === 'about' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'text-yellow-400'}
              >
                <Info className="w-5 h-5" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-24 overflow-y-auto">
        {activeTab === 'home' && (
          <div className="container mx-auto px-4 py-8 max-w-md">
            {/* Profile Section */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/50 p-6 mb-6">
              <div className="flex flex-col items-center gap-4">
                {/* Profile Image - Using a placeholder that represents a YouTube profile */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl shadow-yellow-500/20">
                  <img
                    src="/eslam-jupa-profile.png"
                    alt="إسلام جوبا"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%231a1a1a"/%3E%3Ctext x="50" y="50" font-size="40" text-anchor="middle" dy=".3em" fill="%23ffd700"%3E%EJ%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50"></div>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-2">اسلام جوبا</h2>
                  <p className="text-xl text-yellow-200/80 mb-4">Eslam Jupa</p>
                  <p className="text-gray-400 text-sm">فنان | منشئ محتوى | كاتب</p>
                </div>
              </div>
            </Card>

            {/* Social Media Links */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/50 p-6 mb-6">
              <h3 className="text-center text-yellow-400 font-bold text-lg mb-2">
                يمكنكم المتابعه على وسائل التواصل الاجتماعي
              </h3>
              <p className="text-center text-gray-500 text-sm mb-6">
                كن على اطلاع دائم بكل جديد
              </p>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-500/50 hover:from-red-600/30 hover:to-red-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                >
                  <Youtube className="w-8 h-8 text-red-500" />
                  <span className="text-sm font-medium text-white">YouTube</span>
                </a>

                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-pink-600/20 to-pink-900/20 border border-pink-500/50 hover:from-pink-600/30 hover:to-pink-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <Music className="w-8 h-8 text-pink-500" />
                  <span className="text-sm font-medium text-white">TikTok</span>
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/50 hover:from-purple-600/30 hover:to-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <Instagram className="w-8 h-8 text-purple-500" />
                  <span className="text-sm font-medium text-white">Instagram</span>
                </a>

                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/50 hover:from-blue-600/30 hover:to-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <Facebook className="w-8 h-8 text-blue-500" />
                  <span className="text-sm font-medium text-white">Facebook</span>
                </a>
              </div>
            </Card>

            {/* Latest Content Preview */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/50 p-6">
              <h3 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                أحدث المحتويات
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <Youtube className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">فيديو جديد على قناة اليوتيوب</p>
                    <p className="text-xs text-gray-500">تابع القناة للمزيد</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <div className="w-12 h-12 rounded-lg bg-pink-600/20 flex items-center justify-center flex-shrink-0">
                    <Music className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">فيديوهات ممتعة على تيك توك</p>
                    <p className="text-xs text-gray-500">اكتشف المحتوى الجديد</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">صور ولحظات مميزة</p>
                    <p className="text-xs text-gray-500">تابعنا على إنستجرام</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">تحديثات ومنشورات جديدة</p>
                    <p className="text-xs text-gray-500">انضم لصفحتنا على فيسبوك</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Music Platforms */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/50 p-6">
              <h3 className="text-yellow-400 font-bold text-lg mb-2 flex items-center gap-2">
                <Music className="w-5 h-5" />
                استمع الى اعماله على منصات الموسيقى
              </h3>
              <p className="text-center text-gray-500 text-sm mb-6">
                أحدث الأغنيات والقصائد متاحة على جميع المنصات
              </p>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={socialLinks.appleMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-pink-600/20 to-red-600/20 border border-pink-500/50 hover:from-pink-600/30 hover:to-red-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                  </svg>
                  <span className="text-sm font-medium text-white">Apple Music</span>
                </a>

                <a
                  href={socialLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-green-600/20 to-green-900/20 border border-green-500/50 hover:from-green-600/30 hover:to-green-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <span className="text-sm font-medium text-white">Spotify</span>
                </a>

                <a
                  href={socialLinks.anghami}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-orange-600/20 to-orange-900/20 border border-orange-500/50 hover:from-orange-600/30 hover:to-orange-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="text-orange-500 font-bold text-lg">أ</div>
                  <span className="text-sm font-medium text-white">Anghami</span>
                </a>

                <a
                  href={socialLinks.deezer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/50 hover:from-purple-600/30 hover:to-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.15 6.344c.396.098.676.47.676.879v13.077c0 .85-.69 1.537-1.536 1.537H2.71c-.847 0-1.536-.687-1.536-1.537V2.678c0-.85.69-1.537 1.536-1.537h18.58c.393 0 .768.15 1.05.415.282.265.444.627.444 1.006v3.616l.366.166zm-2.604 1.41l-8.455 3.865-7.85-4.045v10.724c0 .282.228.512.51.512h15.716c.282 0 .51-.23.51-.512V7.754h-.43zm-8.528-3.081c-.852 0-1.545-.694-1.545-1.55s.693-1.55 1.545-1.55c.85 0 1.544.694 1.544 1.55s-.694 1.55-1.544 1.55zm-9.358.414l7.76 3.996 8.506-3.89v-.807c0-.283-.228-.512-.51-.512H2.51c-.282 0-.51.23-.51.512v.702z"/>
                  </svg>
                  <span className="text-sm font-medium text-white">Deezer</span>
                </a>

                <a
                  href={socialLinks.audiomack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-yellow-600/20 to-yellow-900/20 border border-yellow-500/50 hover:from-yellow-600/30 hover:to-yellow-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.127c-.284.474-.896.632-1.374.35-.552-.325-1.165-.548-1.809-.648-.061-.009-.121-.018-.182-.026v-3.565c1.932-.36 3.391-2.068 3.391-4.122 0-2.309-1.883-4.192-4.192-4.192s-4.192 1.883-4.192 4.192c0 2.054 1.459 3.762 3.391 4.122v3.565c-.061.008-.121.017-.182.026-.644.1-1.257.323-1.809.648-.478.282-1.09.124-1.374-.35-.283-.473-.125-1.085.348-1.368.744-.444 1.574-.741 2.444-.857V6.326c0-.552.447-1 1-1s1 .448 1 1v8.576c.87.116 1.7.413 2.444.857.473.283.631.895.348 1.368z"/>
                  </svg>
                  <span className="text-sm font-medium text-white">Audiomack</span>
                </a>

                <a
                  href={socialLinks.qobuz}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 border border-cyan-500/50 hover:from-cyan-600/30 hover:to-cyan-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4 0c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                  </svg>
                  <span className="text-sm font-medium text-white">Qobuz</span>
                </a>

                <a
                  href={socialLinks.amazonMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-900/20 border border-blue-500/50 hover:from-blue-600/30 hover:to-indigo-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="white" stroke="#FFA500" strokeWidth="0.5"/>
                    <path d="M10 8L14 12L10 16" stroke="#FFA500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="14" cy="12" r="2" fill="#FFA500"/>
                  </svg>
                  <span className="text-sm font-medium text-white">Amazon Music</span>
                </a>

                <a
                  href={socialLinks.boomplay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-teal-600/20 to-teal-900/20 border border-teal-500/50 hover:from-teal-600/30 hover:to-teal-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  <span className="text-sm font-medium text-white">Boomplay</span>
                </a>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="container mx-auto px-4 py-8 max-w-md">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-600/50 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500">
                  <img
                    src="/eslam-jupa-profile.png"
                    alt="إسلام جوبا"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%231a1a1a"/%3E%3Ctext x="50" y="50" font-size="40" text-anchor="middle" dy=".3em" fill="%23ffd700"%3E%EJ%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400">من هو اسلام جوبا؟</h2>
                  <p className="text-sm text-gray-400">Eslam Jupa</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* التعريف الأساسي */}
                <div>
                  <h3 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    نبذة عنه
                  </h3>
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 text-sm font-medium whitespace-nowrap">الاسم الكامل:</span>
                      <p className="text-gray-300 text-sm">اسلام محمد فاروق العشيري</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 text-sm font-medium whitespace-nowrap">الاسم الفني:</span>
                      <p className="text-gray-300 text-sm">اسلام جوبا ( Eslam Jupa )</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 text-sm font-medium whitespace-nowrap">تاريخ الميلاد:</span>
                      <p className="text-gray-300 text-sm">24 أغسطس 1992</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 text-sm font-medium whitespace-nowrap">الدراسة:</span>
                      <p className="text-gray-300 text-sm">خريج كلية الحقوق - جامعة القاهرة</p>
                    </div>
                  </div>
                </div>

                {/* التعريف الفني */}
                <div>
                  <h3 className="text-yellow-400 font-bold mb-3">التعريف الفني</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-3 text-center">
                    يُلقّب بـ " تاجر الحكاوي "، ويعمل كشاعر عامية، كاتب سيناريو، ومؤدٍّ صوتي ( Voice Over ). يُعد أحد الشعراء الشباب البارزين في شعر العامية المصرية، ويُعرف بأسلوبه الذي يمزج بين الإلقاء الشعري والأداء الدرامي والموسيقي.
                  </p>
                </div>

                {/* المهارات */}
                <div>
                  <h3 className="text-yellow-400 font-bold mb-3">المهارات</h3>
                  <div className="flex flex-wrap gap-2">
                    {['شاعر عامية', 'كاتب سيناريو', 'مؤدي صوتي (Voice Over)', 'الإلقاء الشعري', 'الأداء الدرامي', 'الأداء الموسيقي'].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-yellow-600/20 border border-yellow-600/50 rounded-full text-xs text-yellow-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* أبرز الأعمال */}
                <div className="text-right">
                  <h3 className="text-white font-bold mb-3">أبرز الأعمال</h3>
                  <div className="bg-gradient-to-r from-red-600/10 to-transparent border-r-4 border-red-500 rounded-r-lg p-3 mr-0">
                    <ul className="text-white text-sm space-y-1 mr-4">
                      <li>• كلنا حبينا واتحبينا</li>
                      <li>• وحشتيني</li>
                      <li>• نكته بايخه</li>
                      <li>• سيناريو الفيلم</li>
                      <li>• احدث قصيدة بعد الوجع</li>
                      <li>• شهيد ارض الفيروز</li>
                      <li>• فاكر منسيتش</li>
                    </ul>
                  </div>
                </div>

                {/* قصائد مميزة */}
                <div className="text-right">
                  <h3 className="text-white font-bold mb-3">قصائد مميزة</h3>
                  <div className="bg-gradient-to-r from-yellow-600/10 to-transparent border-r-4 border-yellow-500 rounded-r-lg p-3 mr-0">
                    <ul className="text-white text-sm space-y-1 mr-4">
                      <li>• الروايه</li>
                      <li>• خيبة أملي</li>
                      <li>• حب عنيف</li>
                      <li>• احساس غريب</li>
                      <li>• فلسطيني</li>
                      <li>• اتخطبتي</li>
                      <li>• كفر الوحوش</li>
                    </ul>
                  </div>
                </div>

                {/* أغنيات شهيرة */}
                <div className="text-right">
                  <h3 className="text-white font-bold mb-3">أغنيات شهيرة</h3>
                  <div className="bg-gradient-to-r from-pink-600/10 to-transparent border-r-4 border-pink-500 rounded-r-lg p-3 mr-0">
                    <ul className="text-white text-sm space-y-1 mr-4">
                      <li>• الحضن الاخير</li>
                      <li>• لسه روحك في المكان</li>
                      <li>• اخر ممكنات الكون</li>
                      <li>• وفي عيدنا</li>
                      <li>• وحيد</li>
                      <li>• مش شايف احلى منك</li>
                    </ul>
                  </div>
                </div>

                {/* الأنشطة */}
                <div className="text-right">
                  <h3 className="text-yellow-400 font-bold mb-3">الأنشطة والإنجازات</h3>
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>أول شاعر مصري يحول القصيدة الى كليب " شهيد ارض الفيروز  ، وحشتيني "</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>شارك في فعاليات ثقافية وأمسيات شعرية متعددة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>حصل على درع كلية حقوق جامعة القاهرة عن أفضل قصيدة حزينة " نكته بايخه "</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>شغل منصب رئيس مبادرة " ثورة إبداع "</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>له تأثير كبير وسط متابعينه عبر منصات التواصل الاجتماعي وظهر ذلك خلال اعماله و بودكاست " تاجر الحكاوي ، رسالتك مع جوبا "</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* النجاح على السوشيال ميديا */}
                <div>
                  <h3 className="text-yellow-400 font-bold mb-3">الانتشار الرقمي</h3>
                  <p className="text-gray-300 leading-relaxed text-sm text-center">
                    تعتمد شهرته بشكل كبير على محتواه التحفيزي والاجتماعي الذي يشاركه عبر منصات التواصل الاجتماعي، حيث يتابعه الكثير. ويسعى دائماً لابتكار محتوى جدير بالناس ويحسهم على النضج، وتقديم خلاصه تجارب الحياة التي تظهر في محتواه بطريقة تجمع بين الإبداع والجودة. هدفه هو الوصول إلى قلوب الناس وترك أثر إيجابي من خلال أعماله.
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="text-yellow-400 font-bold mb-2">المنصات الإلكترونية</h3>
                  <div className="space-y-2">
                    <a
                      href={socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-red-600/10 border border-red-600/30 hover:bg-red-600/20 transition-all"
                    >
                      <Youtube className="w-5 h-5 text-red-500" />
                      <span className="text-sm text-white">قناة اليوتيوب</span>
                    </a>
                    <a
                      href={socialLinks.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-pink-600/10 border border-pink-600/30 hover:bg-pink-600/20 transition-all"
                    >
                      <Music className="w-5 h-5 text-pink-500" />
                      <span className="text-sm text-white">حساب تيك توك</span>
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-purple-600/10 border border-purple-600/30 hover:bg-purple-600/20 transition-all"
                    >
                      <Instagram className="w-5 h-5 text-purple-500" />
                      <span className="text-sm text-white">حساب إنستجرام</span>
                    </a>
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-blue-600/10 border border-blue-600/30 hover:bg-blue-600/20 transition-all"
                    >
                      <Facebook className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-white">صفحة فيسبوك</span>
                    </a>
                    <a
                      href={socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-green-600/10 border border-green-600/30 hover:bg-green-600/20 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-white">تواصل عبر واتساب</span>
                    </a>
                  </div>
                </div>

              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-yellow-600/30 z-50">
        <div className="flex justify-around items-center py-3">
          <Button
            variant={activeTab === 'home' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setActiveTab('home')}
            className={activeTab === 'home' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'text-gray-400 hover:text-yellow-400'}
          >
            <HomeIcon className="w-6 h-6" />
          </Button>

          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>

          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <Music className="w-6 h-6" />
          </a>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>

          <Button
            variant={activeTab === 'about' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setActiveTab('about')}
            className={activeTab === 'about' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'text-gray-400 hover:text-yellow-400'}
          >
            <Info className="w-6 h-6" />
          </Button>
        </div>
      </nav>
    </div>
  )
}
