<script>
    import {page} from '$app/stores';
    import InfoHead from "$lib/InfoHead.svelte";
    import User from '../User.svelte';
    
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<InfoHead pagedescription = "yay!" pagetitle = {data.username} pageurl={$page.url}/>

<User pageuser = {data.username} recipes = {data.recipes} allrecipes = {data.allrecipes} allusers = {data.allusers} sessionuser = {data.sessionuser.username}/>