export default class Weather {
    constructor() {

    }

    async getData(lat, lon) {
        let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ru&appid=a98c6177eb3efaa70af889c850a3d17a&units=metric&cnt=24`;
    
    
        await fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            const city = data.city.name;

            const temp = data.list[0].main.temp;
            const icon = data.list[0].weather[0].icon;
            const description = data.list[0].weather[0].description;
            const feelsLike = data.list[0].main.feels_like;
            const wind = data.list[0].wind.speed;
            const humidity = data.list[0].main.humidity;
            const pressure = data.list[0].main.pressure;
            const clouds = data.list[0].clouds.all;
    
            const temp2 = data.list[8].main.temp;
            const icon2 = data.list[8].weather[0].icon;
            const description2 = data.list[8].weather[0].description;
            const feelsLike2 = data.list[8].main.feels_like;
            const wind2 = data.list[8].wind.speed;
            const humidity2 = data.list[8].main.humidity;
            const pressure2 = data.list[8].main.pressure;
            const clouds2 = data.list[8].clouds.all;
    
            const temp3 = data.list[16].main.temp;
            const icon3 = data.list[16].weather[0].icon;
            const description3 = data.list[16].weather[0].description;
            const feelsLike3 = data.list[16].main.feels_like;
            const wind3 = data.list[16].wind.speed;
            const humidity3 = data.list[16].main.humidity;
            const pressure3 = data.list[16].main.pressure;
            const clouds3 = data.list[16].clouds.all;

            const weatherWidget = new Weather();
    
            weatherWidget.createElements(city,
                temp,
                temp2, 
                temp3,
                icon,
                icon2,
                icon3,
                description,
                description2,
                description3,
                feelsLike,
                feelsLike2,
                feelsLike3,
                wind,
                wind2,
                wind3,
                humidity,
                humidity2,
                humidity3,
                pressure,
                pressure2,
                pressure3,
                clouds,
                clouds2,
                clouds3,
                data);
        });
    };
    
    async getWeather(){
        let lat;
        let lon;

        const weatherWidget = new Weather();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                lat = Number(position.coords.latitude.toString().slice(0, 4));
                lon = Number(position.coords.longitude.toString().slice(0, 7));
                weatherWidget.getData(lat, lon);
            });
        } else {
            lat = 53.906399;
            lon = 27.6242077;
            weatherWidget.getData(lat, lon);
        }
    };

    createSlider(data) {
        let marginLeft = 0;

        const slider = document.createElement('div');
        slider.className = 'slider';
        const sliderList = document.createElement('ul');
        sliderList.className = 'slider-list';
        const arrowRight = document.createElement('div');
        arrowRight.className = 'arrow-right';
        const arrowLeft = document.createElement('div');
        arrowLeft.className = 'arrow-left';

        arrowLeft.innerHTML = `<span></span>`;
        arrowRight.innerHTML = `<span></span>`;

        arrowRight.addEventListener('click', function() {
            if(marginLeft == 280) return;
            if(marginLeft == 0) document.querySelector('.arrow-left').classList.remove('show-arrow');
            const li = document.querySelector('.slider li');
            li.style.marginLeft = `-${marginLeft += 70}px`;
            if(marginLeft == 280) document.querySelector('.arrow-right').classList.add('show-arrow');
        });

        arrowLeft.addEventListener('click', function() {
            if(marginLeft == 0) return;
            if(marginLeft == 280) document.querySelector('.arrow-right').classList.remove('show-arrow');
            const li = document.querySelector('.slider li');
            marginLeft -= 70;
            li.style.marginLeft = `-${marginLeft}px`;
            if(marginLeft == 0) document.querySelector('.arrow-left').classList.add('show-arrow');
        });

        let i = 0;

        while(i < 8) {
            const li = document.createElement('li');
            const time = document.createElement('div');
            time.innerHTML = `
                ${data.list[i].dt_txt.slice(11, 16)}
            `;
            const img = document.createElement('img');
            img.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`)
            const temp = document.createElement('div');
            temp.innerHTML = `
                ${data.list[i].main.temp}&#176
            `;

            li.append(time);
            li.append(img);
            li.append(temp);

            const sliderBlock = document.querySelector('.slider-block');
            sliderList.append(li);
            
            slider.append(sliderList);
            slider.append(arrowRight);
            slider.append(arrowLeft);
            sliderBlock.append(slider);

            i++;
        }
    };
    
    createElements(n,
        t, t2, t3,
        i, i2, i3,
        d, d2, d3,
        f, f2, f3,
        w, w2, w3,
        h, h2, h3,
        p, p2, p3,
        c, c2, c3,
        data) {
            const WeatherWidget = new Weather();

        const style = document.createElement('style');
        style.innerHTML = `
            * {
            margin: 0;
            padding: 0;
            }
    
            body {
                font-family: Arial, Helvetica, sans-serif;
            }
    
            .weather-widget {
                border-radius: 20px;
                width: 30%;
    
                position: absolute;
                right: 40px;
                top: 40px;
                z-index: 999;
            }
    
            .current-weather {
                background-color: rgb(0, 81, 255);
                border-radius: 20px;
                height: 100%;
    
                
                display: flex;
                flex-direction: column;
    
                color: #fff;

                padding-bottom: 30px;
            }
    
            .top-part {
                height: 50%;
    
                padding: 5%;
    
                display: flex;
                justify-content: space-between;
            }
    
            .city-and-degrees {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
    
            .name-of-city {
                font-size: 18px;
            }
    
            .degrees {
                font-size: 30px;
                font-weight: bold;
                letter-spacing: 1px;
    
                margin-top: 5px;
            }
    
            .sky {
                margin-right: 50px;
                font-size: 14px;
    
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

            .sky img {
                width: 100px;
            }
    
            .description {
                text-align: center;
            }
    
            .close-btn {
                width: 30px;
                height: 30px;
                position: absolute;
                right: 5px;
                top: 5px;
    
                display: flex;
                align-items: center;
                justify-content: center;
    
                cursor: pointer;
            }
    
            .close-btn span {
                width: 20px;
                height: 3px;
                background-color: #fff;
                display: inline-block;
    
                transform: rotate(45deg);
            }
    
            .close-btn span::after {
                content: '';
                position: absolute;
                width: 20px;
                height: 3px;
                background-color: #fff;
                transform: rotate(90deg);
            }
    
            .open-btn {
                width: 30px;
                height: 30px;
                position: absolute;
                right: calc(50% - 15px);
                bottom: 5px;
    
                display: flex;
                align-items: center;
                justify-content: flex-start;
    
                cursor: pointer;
                transition: 0.5s;
            }
    
            .open-btn span {
                width: 15px;
                height: 3px;
                background-color: #fff;
                display: inline-block;
                position: absolute;
                left: 4px;
                transform: rotate(45deg);
            }
    
            .open-btn span::after {
                content: '';
                position: absolute;
                left: 6px;
                bottom: 6px;
                width: 15px;
                height: 3px;
                background-color: #fff;
                transform: rotate(90deg);
            }
    
            .bottom-part {
                height: 50%;
    
                padding: 5%;
    
                display: flex;
                justify-content: space-between;
            }
    
            .bottom-part div span {
                display: inline-block;
            }

            .info-block {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 150px;
                width: 35%;
            }

            .info-block div {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
    
            .weather-list-block {
                display: none;
                background-color: #55b0ff;
                border-radius: 0 0 20px 20px;
    
                padding: 5%;
                font-size: 14px;
                height: 200px;
            }
    
            .weather-list {
                display: flex;
                list-style: none;
                justify-content: space-between;
                height: 100%;
            }
    
            .weather-list li {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
    
                width: 30%;
            }
    
            .weather-list li div {
                display: flex;
            }
    
            .weather-list li div:first-child {
                font-size: 16px;
                font-weight: bold;
                justify-content: center;
            }
    
            .weather-list li div:nth-child(2) {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 20px;
                margin-top: 10px;
                justify-content: center;
            }
    
            .weather-list li div span {
                display: inline-block;
                margin-left: auto;
                font-weight: bold;
            }
    
            .weather-list li div {
                justify-content: space-between;
                align-items: center;
            }
    
            .weather-list li div img {
                width: 50px;
            }
    
            .open-days {
                display: block;
            }
    
            .border-rad {
                border-radius: 20px 20px 0 0;
            }
    
            .arrow-change {
                transform: rotate(180deg);
                transition: 0.5s;
            }

            .arrow-change span,
            .arrow-change span::after {
                background-color: #000;
            }

            .slider-block {
                width: 55%;
                position: relative;
            }

            .slider {
                height: 100%;
            }

            .slider-block ul {
                list-style: none;
                display: flex;
                overflow: hidden;
                height: 100%;
            }

            .slider-list li {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0 10px;
                margin-left: 0px;

                transition: 0.5s;
            }

            .slider-list li img {
                width: 50px;
            }

            .arrow-left {
                position: absolute;
                top: calc(50% - 10px);
                left: -10px;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
    
                cursor: pointer;
            }

            .arrow-left span {
                width: 8px;
                height: 3px;
                background-color: #fff;
                display: inline-block;
                position: absolute;
                transform: rotate(-45deg);
                top: 6px;
            }
    
            .arrow-left span::after {
                content: '';
                position: absolute;
                width: 8px;
                height: 3px;
                background-color: #fff;
                transform: rotate(90deg);
                top: 3px;
                right: 3px;
            }

            .arrow-right {
                position: absolute;
                top: calc(50% - 10px);
                right: -10px;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
    
                cursor: pointer;
            }
    
            .arrow-right span {
                width: 8px;
                height: 3px;
                background-color: #fff;
                display: inline-block;
                position: absolute;
                transform: rotate(45deg);
                top: 6px;
            }
    
            .arrow-right span::after {
                content: '';
                position: absolute;
                width: 8px;
                height: 3px;
                background-color: #fff;
                transform: rotate(90deg);
                top: 3px;
                left: 3px;
            }

            .show-arrow {
                display: none;
            }
        `;
    
        document.querySelector('head').append(style);
    
        const weatherWidget = document.createElement('div');
        weatherWidget.className = 'weather-widget';
    
        const currentWeather = document.createElement('div');
        const weatherListBlock = document.createElement('div');
        const closeBtn = document.createElement('div');
        const openBtn = document.createElement('div');
        currentWeather.className = 'current-weather';
        weatherListBlock.className = 'weather-list-block';
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = `<span></span>`;
        closeBtn.addEventListener('click', function() {
            document.querySelector('.weather-widget').remove();
        });
        openBtn.className = 'open-btn';
        openBtn.innerHTML = `<span></span>`;
        openBtn.addEventListener('click', function() {
            document.querySelector('.weather-list-block').classList.toggle('open-days');
            document.querySelector('.current-weather').classList.toggle('border-rad');
            document.querySelector('.open-btn').classList.toggle('arrow-change');
        });
    
        const topPart = document.createElement('div');
        const bottomPart = document.createElement('div');
        topPart.className = 'top-part';
        bottomPart.className = 'bottom-part';
    
        const cityAndDegrees = document.createElement('div');
        const sky = document.createElement('div');
        cityAndDegrees.className = 'city-and-degrees';
        sky.className = 'sky';
    
        const nameOfCity = document.createElement('div');
        const degrees = document.createElement('div');
        nameOfCity.innerHTML = n;
        degrees.innerHTML = `${t}&#176`;
        nameOfCity.className = 'name-of-city';
        degrees.className = 'degrees';
        cityAndDegrees.append(nameOfCity);
        cityAndDegrees.append(degrees);
    
        const icon = document.createElement('img');
        const description = document.createElement('div');
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${i}@2x.png`);
        const newDescription = d[0].toUpperCase() + d.slice(1);
        description.innerHTML = newDescription;
        icon.className = 'icon';
        description.className = 'description';
        sky.append(icon);
        sky.append(description);
    
        topPart.append(cityAndDegrees);
        topPart.append(sky);

        const infoBlock = document.createElement('div');
        const sliderBlock = document.createElement('div');
        infoBlock.className = 'info-block';
        sliderBlock.className = 'slider-block';
    
        const feelsLike = document.createElement('div');
        const wind = document.createElement('div');
        const humidity = document.createElement('div');
        const pressure = document.createElement('div');
        const clouds = document.createElement('div');
        feelsLike.innerHTML = `Ощущ. как <span>${f}&#176</span>`;
        wind.innerHTML = `Ветер <span>${w} mps</span>`;
        humidity.innerHTML = `Влажность <span>${h} %</span>`;
        pressure.innerHTML = `Давление <span>${p} hPa</span>`;
        clouds.innerHTML = `Облака <span>${c} %</span>`;
        feelsLike.className = 'feels-like';
        wind.className = 'wind';
        humidity.className = 'humidity';
        pressure.className = 'pressure';
        clouds.className = 'clouds';
    
        infoBlock.append(feelsLike);
        infoBlock.append(wind);
        infoBlock.append(humidity);
        infoBlock.append(pressure);
        infoBlock.append(clouds);

        bottomPart.append(infoBlock);
        bottomPart.append(sliderBlock);
    
        currentWeather.append(topPart);
        currentWeather.append(bottomPart);
    
        const weatherList = document.createElement('ul');
        weatherList.className = 'weather-list';
        
        const liToday = document.createElement('li');
        liToday.innerHTML = `
            <div>Сегодня</div>
            <div>${t}&#176</div>
            <div>Ощущ. как <span>${f}&#176</span></div>
            <div>${d[0].toUpperCase() + d.slice(1)} <img src="http://openweathermap.org/img/wn/${i}@2x.png"></img></div>
            <div>Ветер <span>${w}</span></div>
            <div>Влажность <span>${h}</span></div>
            <div>Давление <span>${p}</span></div>
            <div>Облака <span>${c}</span></div>
        `;
        const liTomorrow = document.createElement('li');
        liTomorrow.innerHTML = `
            <div>Завтра</div>
            <div>${t2}&#176</div>
            <div>Ощущ. как <span>${f2}&#176</span></div>
            <div>${d2[0].toUpperCase() + d2.slice(1)} <img src="http://openweathermap.org/img/wn/${i2}@2x.png"></img></div>
            <div>Ветер <span>${w2}</span></div>
            <div>Влажность <span>${h2}</span></div>
            <div>Давление <span>${p2}</span></div>
            <div>Облака <span>${c2}</span></div>
        `;
        const liAfterTomorrow = document.createElement('li');
        liAfterTomorrow.innerHTML = `
            <div>Послезавтра</div>
            <div>${t3}&#176</div>
            <div>Ощущ. как <span>${f3}&#176</span></div>
            <div>${d3[0].toUpperCase() + d3.slice(1)} <img src="http://openweathermap.org/img/wn/${i3}@2x.png"></img></div>
            <div>Ветер <span>${w3}</span></div>
            <div>Влажность <span>${h3}</span></div>
            <div>Давление <span>${p3}</span></div>
            <div>Облака <span>${c3}</span></div>
        `;
        weatherList.append(liToday);
        weatherList.append(liTomorrow);
        weatherList.append(liAfterTomorrow);
    
        weatherListBlock.append(weatherList);
    
        weatherWidget.append(currentWeather);
        weatherWidget.append(weatherListBlock);
        weatherWidget.append(closeBtn);
        weatherWidget.append(openBtn);
    
        document.querySelector('body').prepend(weatherWidget);

        WeatherWidget.createSlider(data);
    };
}