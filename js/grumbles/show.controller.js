angular
    .module("grumblr")
    .controller("GrumbleShowController", [
        "$stateParams",
        GrumbleShowControllerFunction
    ]);

function GrumbleShowControllerFunction($stateParams) {
    console.log($stateParams);
    this.grumble = grumbles[$stateParams.id];
}

