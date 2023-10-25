const btnAnsList = document.querySelectorAll(".btn-ans");
        btnAnsList.forEach(btn => {
            btn.addEventListener("click", function () {
                const ans = btn.parentElement.nextElementSibling;
                if (ans.style.display === "none" || ans.style.display === "") {
                    ans.style.display = "block";
                } else {
                    ans.style.display = "none";
                }
            });
        });