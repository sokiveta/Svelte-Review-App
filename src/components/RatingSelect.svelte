<script>
  import {createEventDispatcher} from 'svelte'
  let selected = 10
  const dispatch = createEventDispatcher()
  const onChange = (e) => {
    selected = e.currentTarget.value
    dispatch('rating-select', selected)
  }
</script>

<ul class="rating">
	{#each Array(10) as _, index (index)}
		<li>
			<input type="radio" id="num{index + 1}" name="rating" value={index + 1} on:change={onChange} checked={selected === index + 1} />
			<label for="num{index + 1}">{index + 1}</label>
		</li>
	{/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #7edd47;
    color: #323335;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: #7edd47;
    color: #323335;
  }
</style>