<script>
    import {page} from '$app/stores'
    import InfoHead from "$lib/InfoHead.svelte";
    import Nav from './Nav.svelte';
</script>

<InfoHead pagedescription = '^ ____ ^' pagetitle = 'bagelzone' pageurl = {$page.url}/>

<div>
    <p>
        hii welcome to meshi world ! i'm mara. 
        this website is basically a place where me and my friends can share and browse our recipes. feel free to submit one &#62; ‿ &#60;
        <br>
        <p class="inner">
            there's a <a href = "https://github.com/mewels/maraweb">github</a> page! 
        </p>
        <!-- <div>
            <form method="POST" action='?/delete'>
                <label>
                    <button>
                        delete delete delete
                    </button> 
                </label>
            </form>
        </div> -->
</div>

<style>

    p {
        letter-spacing: 2px;
    }

</style> 

