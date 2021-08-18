<template>
    <div class="test">
        This is test message: {{ message }}
    </div>
</template>

<script>
export default {
    name: 'TestComponent',
    props: {
        message: String
    }
}
</script>

<style>
.test {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 50px auto;
}
</style>