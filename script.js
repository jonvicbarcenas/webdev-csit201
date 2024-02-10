fetch('myInfo.json')
            .then(response => response.json())
            .then(data => {
                const info = data[0];
                const ul = document.getElementById('myInfo');
                for (const key in info) {
                    if (info.hasOwnProperty(key)) {
                        const value = info[key];
                        const li = document.createElement('li');
                        li.textContent = `${key}: ${Array.isArray(value) ? value.join(', ') : value}`;
                        ul.appendChild(li);
                    }
                }
            })