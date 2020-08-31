<template>
    <div class="my-5">
        <nav class="navbar navbar-expand-lg navbar-info bg-info rounded navbar-dark">
            <a class="font-weight-bold text-white" href="#">
                <span class="text-secondary">
                    dev.
                </span>
                portfolio
            </a>
            <button class="navbar-toggler" type="button"  @click="showMobileMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto mr-5 row">
                    <li class="nav-item active col-sm">
                        <a class="nav-link mr-4" href="#home">Home</a>
                    </li>
                    <li class="nav-item col-sm">
                        <a class="nav-link mr-4" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item col-sm">
                        <a class="nav-link mr-4" href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div v-if="showMenu" class="container-fluid bg-dark fixed-top w-100 h-100 text-white py-5">
            <div class="column">
                <div class="col-sm">
                    <button @click="showMenu = false">
                        <font-awesome-icon :icon="['fa', 'window-close']" />
                    </button>
                </div>
                <div class="col-sm">
                    <a class="nav-link mr-4" href="#home">Home</a>
                </div>              
                <div class="col-sm">
                    <a class="nav-link mr-4" href="#skills">Skills</a>
                </div>               
                <div class="col-sm">
                    <a class="nav-link mr-4" href="#projects">Projects</a>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        props: {

        },
        data() {
            return {
                showMenu: false
            }
        },
        methods: {
            showMobileMenu() {
                return this.showMenu = true
            }
        }

    }
</script>