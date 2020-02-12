
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

$(() => {
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  const openModal = () => {
    $modal.css('display', 'block');
  }
  const closeModal = () => {
    $modal.css('display', 'none');
  }
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);
});
