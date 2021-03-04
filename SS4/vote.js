//Dữ liệu 
//Candidate: id, name, description, voteNumber

//Vote: id, candidateList: []
    // show form: 
    // Nhập tên cuộc bầu cử 
    // Danh sách ứng viên
    // Tổng số lượng phiếu bầu
    // Tính hợp lệ 

    // bắt đầu kiểm phiếu
    // trong 1 thời điẻm 
    //     --> hiển thị 1 phiếu 
    //         --> hiển thị danh sách ứng viên
    //         --> loại trừ ứng viên tương ứng trên phiếu thật

function addCandidate() {
    let $candidateList = document.getElementById('candidate-list');
    let $input = document.createElement('input')
    $input.name = 'candidates';
    $input.className = 'form-control';
    $input.placeholder = 'Tên ứng viên';
    
    $candidateList.appendChild($input);
}

document.getElementById('add-candidate-btn').addEventListener('click', addCandidate);

var data = new Array();
data[0] = document.getElementById('name').value;
data[1] = document.getElementById('num-of-vote').value;
data[2] = document.getElementById('candidates').value;
data[3] = document.getElementById('validity').value;

function check() {
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('num-of-vote').value;
    data[2] = document.getElementById('candidates').value;
    data[3] = document.getElementById('validity').value;

    var myerror = new Array();
    myerror[0] = "<span style='color:red;font-weight:bold'>Please enter the information</span>";
    myerror[1] = "<span style='color:red;font-weight:bold'>Please enter the information</span>";
    myerror[2] = "<span style='color:red;font-weight:bold'>Please enter the information</span>";
    myerror[3] = "<span style='color:red;font-weight:bold'>Please enter the information</span>";

    var nearby = new Array("z-name","z-num-of-vote", "z-candidates", "z-validity");

    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];

        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        } 
        else {
            document.getElementById(div).innerHTML = "OK";
        }
    }
}
 
function submitByJavascript()  {
    var myForm = document.forms["myForm"];
    myForm.submit();
}

document.getElementById('submit').addEventListener('click', submitByJavascript);

