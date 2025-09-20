const chieuCao = 160;
//sử dụng phép chia lấy dư % để lấy số lẻ chiều cao
const canNangLyTuong = (chieuCao % 100) * 9 / 10;
const canNangToiDa = chieuCao % 100;
const canNangToiThieu = (chieuCao % 100) * 8 / 10;

//console.log(`Cân nặng lý tưởng của bạn là: ${canNangLyTuong} kg`);
//console.log(`Cân nặng tối đa là: ${canNangToiDa} kg`);
//console.log(`Cân nặng tối thiểu là: ${canNangToiThieu} kg`);

const str1 = `Cân nặng lý tưởng của bạn là: ${canNangLyTuong} kg, `;
const str2 = `Cân nặng tối đa là: ${canNangToiDa} kg, `;
const str3 = `Cân nặng tối thiểu là: ${canNangToiThieu} kg`;

console.log(str1 + str2 + str3);

