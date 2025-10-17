const letterProbs = {
            'А': { prob: 0.1520, info: 0.4137 },
            'Б': { prob: 0.0370, info: 0.1760 },
            'В': { prob: 0.0124, info: 0.0766 },
            'Г': { prob: 0.0350, info: 0.1693 },
            'Д': { prob: 0.0432, info: 0.1952 },
            'Е': { prob: 0.0171, info: 0.0999 },
            'Ё': { prob: 0.0062, info: 0.0443 },
            'Ж': { prob: 0.0052, info: 0.0383 },
            'З': { prob: 0.0162, info: 0.0955 },
            'И': { prob: 0.1354, info: 0.3901 },
            'Й': { prob: 0.0160, info: 0.9555 },
            'К': { prob: 0.0290, info: 0.1481 },
            'Л': { prob: 0.0610, info: 0.2436 },
            'М': { prob: 0.0341, info: 0.1659 },
            'Н': { prob: 0.0703, info: 0.2686 },
            'О': { prob: 0.0464, info: 0.2044 },
            'П': { prob: 0.0054, info: 0.0412 },
            'Р': { prob: 0.0574, info: 0.2356 },
            'С': { prob: 0.0171, info: 0.0999 },
            'Т': { prob: 0.0410, info: 0.1889 },
            'У': { prob: 0.0330, info: 0.1624 },
            'Ф': { prob: 0.0044, info: 0.0350 },
            'Х': { prob: 0.0070, info: 0.0501 },
            'Ц': { prob: 0.0010, info: 0.0106 },
            'Ч': { prob: 0.0130, info: 0.0814 },
            'Ш': { prob: 0.0203, info: 0.1129 },
            'Ъ': { prob: 0.0001, info: 0 },
            'Ь': { prob: 0.0026, info: 0.0179 },
            'Э': { prob: 0.0050, info: 0.0382 },
            'Ю': { prob: 0.0021, info: 0.0180 },
            'Я': { prob: 0.0060, info: 0.0443 },
            'Ў': { prob: 0.0182, info: 0.1044 },
            'Қ': { prob: 0.0254, info: 0.1331 },
            'Ғ': { prob: 0.0040, info: 0.3186 },
            'Ҳ': { prob: 0.0120, info: 0.0766 }
        };

        const textInput = document.getElementById('textInput');
        const charCount = document.getElementById('charCount');

        textInput.addEventListener('input', function() {
            charCount.textContent = this.value.length;
        });

        function calculateInfo() {
            const text = textInput.value.trim();
            
            if (!text) {
                alert('Iltimos, matn kiriting!');
                return;
            }

            const upperText = text.toUpperCase();
            let totalInfo = 0;
            let letterCount = 0;
            const letterFreq = {};

            for (let char of upperText) {
                if (letterProbs[char]) {
                    totalInfo += letterProbs[char].info;
                    letterCount++;
                    letterFreq[char] = (letterFreq[char] || 0) + 1;
                }
            }

            const avgInfo = letterCount > 0 ? totalInfo / letterCount : 0;

            document.getElementById('totalInfo').textContent = totalInfo.toFixed(4);
            document.getElementById('avgInfo').textContent = avgInfo.toFixed(4);
            document.getElementById('letterCount').textContent = letterCount;
            document.getElementById('totalChars').textContent = text.length;

            const sortedLetters = Object.entries(letterFreq)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5);

            const topLettersHtml = sortedLetters.map((item, index) => `
                <div class="letter-item">
                    <div class="letter-rank">${index + 1}</div>
                    <div class="letter-info">
                        <span class="letter-char">${item[0]}</span>
                        <span class="letter-count">${item[1]} marta</span>
                    </div>
                </div>
            `).join('');

            document.getElementById('topLetters').innerHTML = topLettersHtml;
            document.getElementById('results').classList.add('show');
        }

        function clearAll() {
            textInput.value = '';
            charCount.textContent = '0';
            document.getElementById('results').classList.remove('show');
        }