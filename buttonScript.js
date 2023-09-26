var player = new ya.music.Audio();
// Ссылка на HTML-элемент, в котором будет размещен Flash-апплет.
// Эта ссылка будет передана конструктору аудиоплеера.
var appletContainer = document.querySelector("#div_id");

// Создание экземпляра плеера. Пусть тип плеера будет выбран автоматически.
var audioPlayer = new ya.music.Audio(null, appletContainer);