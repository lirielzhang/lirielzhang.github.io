export const slowoodSchemas = {
  ownedSocialAudit: [
    "platform", "brand", "post_url", "post_date", "caption_text", "image_text_ocr",
    "format", "likes", "comments", "views", "hashtags", "mentioned_product",
    "mentioned_store", "content_type", "hook_type", "cta_type", "visual_style", "campaign_theme"
  ],
  competitorBenchmark: [
    "platform", "brand", "post_url", "post_date", "caption_text", "image_text_ocr",
    "format", "likes", "comments", "views", "hashtags", "content_mechanic",
    "user_participation", "product_context"
  ],
  xhsSearchIntent: [
    "keyword", "title", "note_url", "author", "publish_date", "likes", "saves",
    "comments", "note_text", "mentioned_brand", "mentioned_location", "user_intent",
    "content_angle", "pain_point", "opportunity"
  ],
  publicReviews: [
    "source", "url", "date", "rating", "branch", "text", "sentiment",
    "praised_aspect", "complaint_aspect", "use_case", "quote"
  ]
};
