document.addEventListener("DOMContentLoaded",()=>{
    const display_status=document.querySelector("#status");
    const cells=document.querySelectorAll(".cell");
    const restart_button=document.querySelector("#restart");
    let curr_player='X';
    let gameActive = true;
    let game_state=['','','','','','','','',''];
    const winning_condition=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    //function to store the value of the index in the game_state
    const handle_cell_played=(clicked_cell,clicked_cell_index)=>{
        game_state[clicked_cell_index]=curr_player;
        clicked_cell.innerText=curr_player;
    };

    //function to change the player
    const handle_player_change=()=>{
        curr_player=curr_player==='X'?'O':'X';
        display_status.innerText=`It's ${curr_player}'s turn.`;
    };

    // function to check who won or the game ended up in draw
    const handle_result_validation=()=>{
        let round_won=false;
        for (let i=0;i< winning_condition.length;i++){
            const[a,b,c]=winning_condition[i]
            if(game_state[a]===''||game_state[b]===''|| game_state[c]==='')
                continue;
            if(game_state[a]===game_state[b] && game_state[b]===game_state[c]){
                round_won=true;
                break;
            }
        }  

    if(round_won){
        display_status.innerText=`Player ${curr_player} has won🥳.`
        cells.forEach(cell=>cell.removeEventListener('click',handle_cell_click));
        gameActive=false;
        return;
    }

    const round_draw=!game_state.includes('');
    if (round_draw) {
        display_status.innerText = 'Game ended in a draw!';
        gameActive=false;
        return;
    }

        handle_player_change();
    };

    const handle_cell_click=(Event)=>{
        const clicked_cell=Event.target;
        const clicked_cell_index=parseInt(clicked_cell.getAttribute('data-index'));
        if(game_state[clicked_cell_index]!=='' || !gameActive)
            return;
        handle_cell_played(clicked_cell,clicked_cell_index)
        handle_result_validation();
    };

    const handle_restart_game = () => {
        curr_player = 'X';
        gameActive=true;
        game_state = ['', '', '', '', '', '', '', '', ''];
        display_status.innerText = `It's ${curr_player}'s turn`;
        cells.forEach(cell => {
            cell.innerText = '';
            cell.addEventListener('click', handle_cell_click);
        });
    };

    cells.forEach(cell => cell.addEventListener('click', handle_cell_click));
    restart_button.addEventListener('click', handle_restart_game);

    display_status.innerText = `It's ${curr_player}'s turn`;


});