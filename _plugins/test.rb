module Jekyll
  class TestGen < Generator
    priority :lowest

    def generate(site)
      puts site.posts.to_yaml
    end
  end
end
