function analyzeURL() {
    let url = document.getElementById("urlInput").value.trim();
    let result = document.getElementById("result");

    if (url === "") {
        result.innerHTML = "Please enter a URL!";
        result.style.color = "orange";
        return;
    }

    let risk = 0;
    let suspiciousWords = [
        "login",
        "verify",
        "password",
        "bank",
        "secure",
        "account",
        "update"
    ];

    suspiciousWords.forEach(function(word) {
        if (url.toLowerCase().includes(word)) {
            risk++;
        }
    });

    if (url.length >= 50) {
        risk++;
    }

    if (url.toLowerCase().startsWith("http://")) {
        risk++;
    }

    if (risk >= 2) {
        result.innerHTML = "⚠️ Suspicious URL Detected! Risk Score: " + risk;
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ Low Risk URL! Risk Score: " + risk;
        result.style.color = "#00ff88";
    }
}