export default async (req, context) => {
  try {
    const visite = (await context.storage.get({ key: 'visite' })) || 0;
    const nuovo = visite + 1;
    await context.storage.put({ key: 'visite', value: nuovo });
    return new Response(JSON.stringify({ visite: nuovo }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Errore contatore' }), { status: 500 });
  }
};
