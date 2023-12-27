function firstNonRepeatedChar(str) {
  // Boş string kontrolü
  if (str.length === 0) {
    return null;
  }

  // Her karakterin sayısını tutan bir nesne oluştur
  const charCount = {};

  // Her karakterin sayısını saymak için string'i döngüye al
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // İlk non-tekrarlanan karakteri bulmak için tekrar string'i döngüye al
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Eğer non-tekrarlanan karakter bulunamazsa null döndür
  return null;
}

// Kullanıcıdan giriş al
const input = prompt("Enter a string");

// Sonucu alert kullanarak göster
alert(firstNonRepeatedChar(input));