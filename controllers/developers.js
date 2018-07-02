var express = require('express')
  , router = express.Router();

global.developers = [
   {
	    id:1,
	    name:'Sujith Sudhakaran',
	    designaion:'Senior Software Engineer'
   },
   {
	    id:2,
	    name:'Anand Morais',
	    designaion:'Solution Architect'
   },
   {
	    id:3,
	    name:'Akhil Velayudhan',
	    designaion:'Senior Sortware Engineer'
   },
   {
	    id:4,
	    name:'Shyamjith Sasankan',
	    designaion:'Software Engineer'
   }
];

router.get('/', function(req, res){
	return res.json({
		developers: global.developers,
		error: false
	});
});

router.post('/', function(req, res){
	if(!req.body.id || !req.body.name || !req.body.designation){
        return res.json({
			message: 'Data is missing',
			error: true
		});
	}
	global.developers.push(req.body);
	return res.json({
		messsae: 'Success',
		error: false
	})
});

router.put('/:devid', function(req, res){
	for(let i=0;i<global.developers.length;i++){
        if(global.developers[i].id === parseInt(req.params.devid, 10)){
           global.developers[i].name = req.body.name;
           global.developers[i].designation = req.body.designation;          
	        return res.json({
				message: 'Success',
				error: false
			});
		}
	}
	return res.status(404).json({
		message: 'Developer not found',
		error: true
	});
}); 

router.delete('/:devid', function(req, res){
	for(let i=0;i<global.developers.length;i++){
        if(global.developers[i].id === parseInt(req.params.devid, 10)){
           global.developers.splice(i,1);         
	        return res.json({
	        	developer: global.developers[i],
				message: 'Success',
				error: false
			});
		}
	}
	return res.status(404).json({
		message: 'Developer not found',
		error: true
	});
});

router.get('/:devid', function(req, res){
	for(let i=0;i<global.developers.length;i++){
        if(global.developers[i].id === parseInt(req.params.devid, 10)){         
	        return res.json({
	        	developer: global.developers[i],
				message: 'Success',
				error: false
			});
		}
	}
	return res.status(404).json({
		message: 'Developer not found',
		error: true
	});
});


module.exports = router;