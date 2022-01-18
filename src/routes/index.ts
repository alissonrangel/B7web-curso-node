import express, {Request, Response, Router} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{

  let age: number = 11;
  let showOld: boolean = false;

  if (age>50) {
    showOld = true;
  }
  res.render('pages/home', {
    user: "Rangel",
    showWelcome: false,
    age,
    showOld,
    products: [{title: 'Produto X', price: 10},{title: 'Produto Y', price: 20},{title: 'Produto Z', price: 30}],
    frasesDoDia: []
  });
})

router.get('/contato', (req: Request, res: Response)=>{
  res.render('pages/contato');
})

router.get('/sobre', (req: Request, res: Response)=>{
  res.render('pages/sobre');
})

export default router;