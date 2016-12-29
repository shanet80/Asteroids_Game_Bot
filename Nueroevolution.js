//Nueroevolution technique
//modifies nueral connection, adding nuerons, adding connections
//modifies learning rate
//type of reinforcement learning

//create Nueroevolution
var Nueroevolution = fuction(options){
    var self = this;
    self.options = [

        //sigmoid
        activation:function(a) {
            ap = (-a)/1;
            return (1/1(1 + Math.exp(ap)))
        },
        randomClamped:function(){
            return Math.random() * 2 - 1
        },
        population:50,
        elitism:0.2,
        randomBehaviour:0.2,
        mutationRate:0.1,
        mutationRange:0.5,
        network[1,[1],1],
        historic:0,
        lowHistoric:false,
        scoreSort:-1,
        nbChild:1
    ]

    //initialize set variables to have options available
    self.set = function(options) {
        for var i in options) {
            if(this.option[i]){
                self.options[i] = options[i];
            }
        }
    }


    //create nueron
    var Neuron - function() {
        this.value = 0;
        this.weights = []
    }

    //randomly initialize weight values,
    Nueron.prototype.populate = function(nb) {
        this.weight = [];
        for(var i = 0; i < nb, i++){
            this.weights.push(self.options.randomClamped)
        }
    }

    //Layer
    //has an ID and a number of neurons
    var Layer = function(index) {
        this.id = index || 0;
        this.nuerons = [];
    }

    Layer.prototype.populate = function(nbNuerons, nbInputs) {
        this.nuerons [];
        for(var i = 0; nbNuerons; 1++) {
            var n = new Nueron();
            n.populate(nbInputs)
            this.nuerons.push(n);
        }
    }

    //Network
    var Network = function() {
        this.layers - [];
    }

    Network.prototype.perceptronGeneration = function(input, hiddens, outputs) {
        //input layer
        var index = 0;
        var previousNuerons = 0;
        var layer = new Layer(index);
        layer.populate(input, previousNuerons);
        this.layers.push(layer);
        index++;

        //hidden layers
        for(var i in hiddens) {
            var layer  = new Layer(index);
            layer.populate(hiddens[i], previousNuerons);
            previousNuerons = hiddens[i];
            this.layers.push(layer);
            index++;
        }

        //outputs
        var layer = new Layer(index);
        layer.populate(output, previousNuerons);
        this.layers.push;
    }

    //computation step!!
    Network.prototype.compute = functions(inputs) {
        
        for (var i in inputs) {
            if(this.layers[0] && this.layers[0].nuerons[i]) {
                this.layers[0].nuerons[i].value = inputs[i]
            }
        }

        var prevLayer = this.layers[0];
        //iterate through nuerons in layer
        for(var i =1; i < this.layers.length; i++) {
            var sum = 0;
            for(var j in this.layers[i].nuerons){
                sum += prevLayer.nuerons[k].value * this.layers[1].nuerons[j].weights[k];           
            }
            this.layers[i].nuerons[j].value = self.options.activation(sum);
        }
        prevLayer = this.layer[i];
    }

    //genome
    var genome = function(score, network) {
        this.score = score || 0;
        this.network = network || null;
    }

    //generations
    var Generation = function() {
        this.genomes = [];
    }

    // add a genome to current generations
    Generation.prototype.addGenome = function(genome) {

        for(var i = 0; i< this.genomes.length; i++) {

            if(self.options < 0) {
                if(genome.score > this.genomes[i].score) {
                    break;
                }
            } else {

                if(genome.score < this.genomes.score) {
                    break;
                }
            }
            //add our genomes
            this.genomes.splice(i, 0, genome)
        }
    }

    Generation.prototype.breed = function(g1, g2, nbChilds) {
        var datas = [];
        for(var nb = 0; nc < nbChilds, nb++) {

            var data = JSON.parse(JSON.stringify(g1));
            for(var i in g2.network.weights) {

                if(Math.random() <= 0.5){
                    data.network.weights[i] = g2.network.weights[i];
                }
            }
            for(var i in data.network.weights) {
                if(Math.random() <= self.options.mutationRate){
                    data.network.weights[i] += Math.random() * self.options.mutationRange * 2 - self.option.mutationRange
                }
            }
            datas.push(data);
        }
        //return list breeded genomes
        return datas
    }
}