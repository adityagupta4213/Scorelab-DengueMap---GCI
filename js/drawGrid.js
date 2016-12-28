drawGrid();

function drawGrid() {
    var x = 3;
    var y = 3;
    var t = '<table cellspacing="0" border="1" bordercolor="black" cellpadding="0" class="grxd">';
    for (var i = 1; i <= (x * y); i++) {
        t += (i == 1 ? '<tr>' : '');
        t += '<td style="cursor:pointer; text-align:center;">'+i+'</td>';
        if (i == (x * y)) {
            t += '</tr>';
        } else {
            t += (i % 3 === 0 ? '</tr><tr>' : '');
        }

    }
    t += '</table>';
    $("#drawGrid").html(t);
}