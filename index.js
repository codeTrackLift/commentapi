const fs = require('fs/promises');
const express = require('express');
// const cors = require('cors');
const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());

// add comment
app.post('/comment', async (req, res) => {
  const id = uuid();
  const content = req.body.content;

  if (!content) {
    return res.sendStatus(400); // return to exit early
  }

  await fs.mkdir('data', { recursive: true });
  await fs.writeFile(`data/${id}.txt`, content);

  res.status(201).json({
    id: id
  });
});

// get comment
app.get('/comment/:id', async (req, res) => {
  const id = req.params.id;
  let content;

  try {
    content = await fs.readFile(`data/${id}.txt`, 'utf-8');
  } catch (err) {
    return (res.sendStatus(404));
  }

  res.json({
    content: content
  })
})

// update comment
app.patch('/comment/:id', async (req, res) => {
  const id = req.params.id;
  const content = req.body.content;

  if (!content) {
    return res.sendStatus(400); // return to exit early
  }

  await fs.writeFile(`data/${id}.txt`, content);

  res.status(201).json({
    id: id,
    content: content
  });
})


// delete comment
app.delete('/comment/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await fs.rm(`data/${id}.txt`, undefined);
  } catch (err) {
    return (res.sendStatus(404));
  }

  res.status(201).json({
    id: id,
    status: 'deleted'
  });
})

app.listen(3000, () => console.log('listening on 3000...'));