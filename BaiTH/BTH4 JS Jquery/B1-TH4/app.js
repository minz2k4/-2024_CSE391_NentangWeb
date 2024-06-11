document.addEventListener("DOMContentLoaded", function() {
    const formSinhVien = document.getElementById("formSinhVien");
    const bangSinhVien = document.getElementById("bangSinhVien").getElementsByTagName('tbody')[0];

    formSinhVien.addEventListener("submit", function(event) {
        event.preventDefault();
        const HoTen = document.getElementById("HoTen").value;
        const MSV = document.getElementById("MSV").value;
        const date = document.getElementById("date").value;
        const Lop = document.getElementById("Lop").value;

        if(validateSinhVien(HoTen, MSV, date, Lop)) {
            let danhsachSinhVien = JSON.parse(localStorage.getItem("danhsachSinhVien")) || [];

            const editIndex = formSinhVien.getAttribute("data-edit-index");
            if(editIndex !== null) {
                //chỉnh sửa sinh viên
                danhsachSinhVien[editIndex] = {HoTen, MSV, date, Lop};
                formSinhVien.removeAttribute("data-edit-index");
            } else {
                //thêm sinh viên mới
                danhsachSinhVien.push({HoTen, MSV, date, Lop});
            }

            localStorage.setItem("danhsachSinhVien", JSON.stringify(danhsachSinhVien));
            hienthiDanhSachSinhVien();
            formSinhVien.reset();
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    });

    function validateSinhVien(HoTen, MSV, date, Lop) {
        return HoTen !== "" && MSV !== "" && date !== "" && Lop !== "";
    }

    function hienthiDanhSachSinhVien() {
        bangSinhVien.innerHTML = "";
        let danhsachSinhVien = JSON.parse(localStorage.getItem("danhsachSinhVien")) || [];
        danhsachSinhVien.forEach((SinhVien, index) => {
            let row = bangSinhVien.insertRow();
            row.insertCell(0).innerText = index + 1; // số thứ tự
            row.insertCell(1).innerText = SinhVien.HoTen;
            row.insertCell(2).innerText = SinhVien.MSV;
            row.insertCell(3).innerText = SinhVien.date;
            row.insertCell(4).innerText = SinhVien.Lop;
            let hanhDongCell = row.insertCell(5);
            hanhDongCell.innerHTML = `<button class="btn btn-info" onclick="suaSinhVien(${index})">Sửa</button>
                                      <button class="btn btn-danger" onclick="xoaSinhVien(${index})">Xóa</button>`;
        });
    }

    window.suaSinhVien = function(index) {
        let danhsachSinhVien = JSON.parse(localStorage.getItem("danhsachSinhVien")) || [];
        let SinhVien = danhsachSinhVien[index];
        document.getElementById("HoTen").value = SinhVien.HoTen;
        document.getElementById("MSV").value = SinhVien.MSV;
        document.getElementById("date").value = SinhVien.date;
        document.getElementById("Lop").value = SinhVien.Lop;
        formSinhVien.setAttribute("data-edit-index", index);
    }

    window.xoaSinhVien = function(index) {
        if(confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
            let danhsachSinhVien = JSON.parse(localStorage.getItem("danhsachSinhVien")) || [];
            danhsachSinhVien.splice(index, 1);
            localStorage.setItem("danhsachSinhVien", JSON.stringify(danhsachSinhVien));
            hienthiDanhSachSinhVien();
        }
    }

    hienthiDanhSachSinhVien();
});