<script>
  import {FeedbackStore} from '../stores'
	$: count = $FeedbackStore.length;
	$: average = $FeedbackStore.reduce((acc, curr) => acc + curr.rating, 0) / count;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Average Rating: {average.toFixed(2)}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>