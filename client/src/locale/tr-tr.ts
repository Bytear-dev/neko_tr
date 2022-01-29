export const logout = 'çıkış'
export const unsupported = 'Tarayıcınız WebRTC desteklemiyor'
export const admin_loggedin = 'Yönetici olarak giriş yaptınız'
export const you = 'Sen'
export const somebody = 'Birisi'
export const send_a_message = 'Mesaj gönder'

export const side = {
  chat: 'Sohbet',
  settings: 'Ayarlar',
}

export const connect = {
  login_title: 'Lütfen Giriş Yap',
  invitation_title: 'Bu odaya davet edildiniz',
  displayname: 'İsminizi giriniz',
  password: 'Parola',
  connect: 'Bağlan',
  error: 'Giriş yapılamadı',
  empty_displayname: 'İsim boş olmamalı.',
}

export const context = {
  ignore: 'Görmezden gel',
  unignore: 'Yoksay',
  mute: 'Sustur',
  unmute: 'Sesini aç',
  release: 'Kontrolleri Serbest Bırak',
  take: 'Kontrolü Devral',
  give: 'Kontrölü Ver',
  kick: 'At',
  ban: 'IP Ban',
  confirm: {
    kick_title: '{name} atılsın mı?',
    kick_text: 'Gerçekten {name} kullanıcısını atmak istiyor musun?',
    ban_title: '{name} banlansın mı?',
    ban_text: 'Gerçekten {name} kullanıcısını banlamak istiyor musun? Bunu geri almak için sunucunun yeniden başlatılması gerekir.',
    mute_title: '{name} susturulsun mu?',
    mute_text: '{name} kullanıcısının susturulmasını istiyor musun?',
    unmute_title: '{name} sesini aç?',
    unmute_text: '{name} kullanıcısının sesini açmak istiyor musun?',
    button_yes: 'Evet',
    button_cancel: 'İptal',
  },
}

export const controls = {
  release: 'Kontrolü Bırak',
  request: 'Kontrol İsteği',
  lock: 'Kontrolü Kilitle',
  unlock: 'Kontrol Kilidini Aç ',
  has: 'Kontrol sende',
  hasnot: 'Kontrole sahip değilsin',
}

export const locks = {
  control: {
    lock: 'Kontrolleri Kilitle (kullanıcılar için)',
    unlock: 'Kontrollerin Kilidini Kaldır (kullanıcılar için)',
    locked: 'Kontroller Kilitlendi (kullanıcılar için)',
    unlocked: 'Kontollerin Kilidi Kaldırıldı (kullanıcılar için)',
    notif_locked: 'kontroller kullanıcılar için kilitlendi',
    notif_unlocked: 'kullanıcılar için kontrolün kilidi kaldırıldı',
  },
  login: {
    lock: 'Oda Kilidi (kullanıcılar için)',
    unlock: 'Oda Kilidini Kaldır (kullanıcılar için)',
    locked: 'Oda Kilitlendi (kullanıcılar için)',
    unlocked: 'Oda Kilidi Kaldırıldı (kullanıcılar için)',
    notif_locked: 'oda kilitlendi',
    notif_unlocked: 'oda kilidi kaldırıldı',
  },
}

export const setting = {
  scroll: 'Kaydırma Hassasiyeti',
  scroll_invert: 'Kaydırmayı Ters Çevir',
  autoplay: 'Videoyu Otomatik Oynat',
  ignore_emotes: 'İfadeleri Yoksay',
  chat_sound: 'Sohbet Seslerini Çal',
  keyboard_layout: 'Klavye Düzeni',
  broadcast_title: 'Canlı Yayın',
}

export const connection = {
  logged_out: 'Çıkış yaptınız.',
  reconnecting: 'Yeniden Bağlanılıyor...',
  connected: 'Bağlantı Kuruldu',
  disconnected: 'Bağlantı Koptu',
  kicked: 'Odadan atıldınız.',
  button_confirm: 'TAMAM',
}

export const notifications = {
  connected: '{name} bağlandı',
  disconnected: '{name} ayrıldı',
  controls_taken: '{name} kontrolleri aldı',
  controls_taken_force: 'kontrolleri devraldı',
  controls_taken_steal: '{name} kontrolleri aldı',
  controls_released: '{name} kontolleri bıraktı',
  controls_released_force: 'kontrolleri bıraktı',
  controls_released_steal: '{name} kontrolleri bıraktı',
  controls_given: '{name} kontrolleri verdi',
  controls_has: '{name} kontrollere sahip',
  controls_has_alt: 'Kontrol isteği bildirildi',
  controls_requesting: '{name} kontrol talep ediyor',
  resolution: 'çözünürlük {width}x{height}@{rate} olarak değiştirildi',
  banned: '{name} banlandı',
  kicked: '{name} atıldı',
  muted: '{name} susturuldu',
  unmuted: '{name} sesi açıldı',
}
