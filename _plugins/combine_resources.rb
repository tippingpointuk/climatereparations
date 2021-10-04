require 'jekyll'

module CombineResources
  class Generator < ::Jekyll::Generator
    def generate(site)
      site.collections['resources'].docs.each do |r|
        if site.data['resources']
          site.data['resources'].append({
              "url" => r.url,
              "title" => r.data['title'],
              "description" => r['summary'],
              "tags" => r['tags']
            })
        end
      end
    end
  end
end
