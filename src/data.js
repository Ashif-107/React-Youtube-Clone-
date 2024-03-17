export const API_KEY = 'AIzaSyAOffWVuBSEvUUgRQr-1NBwLutqhsIZJGg';


export const value_conventor = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + 'M';
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + 'K';
    }
    else {
        return value;
    }
}