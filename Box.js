AFRAME.registerComponent('move-box', {
    // Inital Render - Schema
    schema: {
        moveX: { type: 'number', default:1 }
    },
    // Componenet Did Update 
    tick: function(){
        this.data.moveX += 0.01
        let pos = this.el.getAttribute('position')
        pos.x = this.data.moveX
        this.el.setAttribute('position',{
            x:pos.x,
            y:pos.y,
            z:pos.z
        })
        
    }

})