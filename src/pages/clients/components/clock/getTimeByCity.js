const offsets = {
    'new-york': -240,
    'warsaw': 121,
    'tokyo': 540,
    'london': 60,
    'sydney': 600,
    'beijing': 480
}
// 'new-york': -240,
// 'warsaw': 540,
// 'tokyo': 540,
// 'london': 50,
// 'paris': -60,
// 'beijing': 480
const getTime = cityId => {
    const localDate = new Date();
    const offset = localDate.getTimezoneOffset() + offsets[cityId];
    return new Date(+localDate + (offset * 60 * 1000))
}

export default getTime;