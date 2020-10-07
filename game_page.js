player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":"
document.getElementById("player2_name").innerHTML = player2_name + ":"

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question turn-" + player1_name
document.getElementById("player_answer").innerHTML = "Answser turn-" + player2_name

function send() {
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
    console.log("Word in lower case = " + word)

    charAt1 = word.charAt(1)
    console.log(charAt1)

    length_2 = Math.floor(word.lenght / 2)
    charAt2 = word.charAt(length_2)
    console.log(charAt2)

    lengthm1 = word.lenght - 1
    charAt3 = word.charAt(lengthm1)
    console.log(charAt2)

    remove_charAt1 = word.replace(charAt1, "_")
    remove_charAt2 = remove_charAt1.replace(charAt2, "_")
    remove_charAt3 = remove_charAt2.replace(charAt3, "_")

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
qustin_turn = "player1"
ans_turn = "player2"

function check() {
    get_ans = document.getElementById("input_check_box").value
    ans = get_ans.toLowerCase()
    console.log("answer in lower case - " + ans)

    if (ans == word) {
        if (ans_turn == "player1") {
            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score
        } else {
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score
        }

    }

    if (qustin_turn = "player1") {
        qustin_turn = "player2"
        document.getElementById("player_question").innerHTML = "qustin turn - " + player2_name


    } else {
        qustin_turn = "player1"
        document.getElementById("player_question").innerHTML = "qustin turn - " + player1_name

    }
    if (ans_turn = "player2") {
        ans_turn = "player1"
        document.getElementById("player_ans").innerHTML = "ans turn - " + player1_name


    } else {
        ans_turn = "player2"
        document.getElementById("player_ans").innerHTML = "ans turn - " + player2_name

    }
    document.getElementById("output").innerHTML = ""
}