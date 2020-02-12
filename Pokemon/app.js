
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
                // $('input[type="text"]').empty(); for removing html elements
                $('form').trigger('reset') // in order to empty the values so it depends on what you need and how your form works
            },
            ()=>{
                console.log('bad');
            }
        );
    })
})
