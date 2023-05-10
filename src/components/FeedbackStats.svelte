<script lang="ts">
    export let count: number;
    export let average: number;
</script>
<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Average Rating: {average ? average.toFixed(2) : 0}</h4>
</div>
<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
    }
</style>