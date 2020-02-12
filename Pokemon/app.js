
$(() => {
    $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'https://pokeapi.co/api/v2/pokemon/' + userInput
        }).then(
            (data)=>{
                $('#name').html(data.forms[0].name);
                $('#ability').html(data.abilities[0].ability.name);
                $('#base_experience').html(data.base_experience);
                $('#image').html(data.sprites.front_default)

                $('form').trigger('reset')
            },
            ()=>{
                console.log('bad');
            }
        );
    })
})
