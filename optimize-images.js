const fs = require('fs');
const path = require('path');

// Простая функция для создания оптимизированной версии изображения
// В реальном проекте лучше использовать sharp или imagemin
function optimizeImage() {
  console.log('Для оптимизации изображений установите sharp:');
  console.log('npm install sharp');
  console.log('Или используйте онлайн-инструменты:');
  console.log('1. https://tinypng.com/ - сжимает PNG/JPG');
  console.log('2. https://squoosh.app/ - Google инструмент');
  console.log('3. https://imagecompressor.com/');
  console.log('');
  console.log('Рекомендуемые размеры для hero изображения:');
  console.log('- Ширина: 1920px');
  console.log('- Высота: 1080px');
  console.log('- Качество: 80-85%');
  console.log('- Формат: WebP или AVIF');
  console.log('- Размер файла: < 500KB');
}

optimizeImage();
