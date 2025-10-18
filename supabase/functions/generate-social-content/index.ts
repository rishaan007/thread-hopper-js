import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { content, tone } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Generate Twitter thread
    const twitterResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a social media expert. Convert content into engaging Twitter threads with a ${tone} tone. Format as a numbered thread (1/n, 2/n, etc). Keep each tweet under 280 characters. Use emojis and hashtags where appropriate.`
          },
          {
            role: 'user',
            content: `Convert this content into a Twitter thread:\n\n${content}`
          }
        ],
      }),
    });

    // Generate LinkedIn post
    const linkedinResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a social media expert. Convert content into a professional LinkedIn post with a ${tone} tone. Make it engaging and professional. Use line breaks for readability. Include relevant hashtags at the end.`
          },
          {
            role: 'user',
            content: `Convert this content into a LinkedIn post:\n\n${content}`
          }
        ],
      }),
    });

    // Generate Reddit post
    const redditResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a social media expert. Convert content into a Reddit post with a ${tone} tone. Make it conversational and community-oriented. Use formatting like **bold** and bullet points where appropriate.`
          },
          {
            role: 'user',
            content: `Convert this content into a Reddit post:\n\n${content}`
          }
        ],
      }),
    });

    const twitterData = await twitterResponse.json();
    const linkedinData = await linkedinResponse.json();
    const redditData = await redditResponse.json();

    return new Response(
      JSON.stringify({
        twitter: twitterData.choices[0].message.content,
        linkedin: linkedinData.choices[0].message.content,
        reddit: redditData.choices[0].message.content,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error generating content:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
