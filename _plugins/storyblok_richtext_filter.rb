require "storyblok"


module StoryblokRender
  def render_richtext(richtext)
    # puts richtext
    # " richtext init "
    storyblok_config = @context.registers[:site].config['storyblok']
    client ||= ::Storyblok::Client.new(
      token: storyblok_config['token'],
      version: storyblok_config['version']
      # component_resolver: -> (component, data) do
      #     case component
      #     when 'button'
      #       "<a href=''><span>button</span></a>"
      #     end
      #   end
    )
    # client.set_component_resolver(->(component, data) {
    #   "#{component}"
    # })
    client.render(richtext)
  end
end

Liquid::Template.register_filter(StoryblokRender)
