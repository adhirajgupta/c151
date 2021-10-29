AFRAME.registerComponent('rotate-box', {
    schema: {
        rotateY: { type: 'number', default: 1 }
    },
    tick: function () {
        this.data.rotateY += 1
        let rotate = this.el.getAttribute('rotation')
        rotate.y = this.data.rotateY
        console.log(this.data.rotateY)
        this.el.setAttribute('rotation', {
            x: rotate.x,
            y: rotate.y,
            z: rotate.z
        })

    }

})