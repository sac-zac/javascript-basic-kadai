const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
    text = document.getElementById('text').textContent = 'ボタンをクリックしました';
    console.log(text);
    }, 2000);
});