const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 12;
const STRONG_ATTACK_VALUE = 17;


let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode){
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You Won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You Lost!');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0){
        alert ('You have a draw!')
    }
}


function attackHandler(){
    attackHandler('ATTACK');
}

function strongAttackHandler(){
    attackHandler('STRONG_ATTACK');
}


attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click' , strongAttackHandler)